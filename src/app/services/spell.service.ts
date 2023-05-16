import { Injectable } from '@angular/core';
import { SPELLS } from './data/spells';
import { of } from 'rxjs/internal/observable/of';
import { Spell } from '../interfaces/spell';
import { DataService } from './data.service';

const CLASSES = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(
    private dataService: DataService
  ) { }

  getAllSpells() {
    return of(SPELLS)
  }

  getSingleSpell(spellName: string) {
    const spell = SPELLS.find(fi => fi.name === spellName)

    return of(spell)
  }

  getRandomSpellScroll(spellLevel: number) {
    const spellLevelList = SPELLS.filter(fi => fi.level === spellLevel)
    const randomNumber = this.dataService.getRandomNumber(1, spellLevelList.length)

    return spellLevelList[randomNumber]

  }

  getSpellsFromSchool(spellSchool: string) {
    const spellsOfSchool = SPELLS.filter(fi => fi.school.name === spellSchool)

    return of(spellsOfSchool)
  }

  getSpellsOfLevel(spellLevel: number) {
    const spellsOfLevel = SPELLS.filter(fi => fi.level === spellLevel)

    return of(spellsOfLevel)
  }

  getSpellsOfClass(className: string) {
    const spellsOfClass = SPELLS.filter(fi => fi.classes.filter(c => c.name === className).length > 0)

    return of(spellsOfClass)
  }

  getSpellsByClass() {
    const spellsByClass = CLASSES.reduce((acc: { className: string, spells: string[] }[], cur: string) => {

      if (!acc.find(fi => fi.className === cur)) {
        acc = [...acc, {
          className: cur, spells: SPELLS.reduce((sAcc: string[], sCur: Spell) => {

            if (sCur.classes.find(sFi => sFi.name === cur)) {
              sAcc = [...sAcc, sCur.name]
            }

            return sAcc
          }, [])
        }]
      }

      return acc
    }, [])

    return of(spellsByClass)
  }
}
