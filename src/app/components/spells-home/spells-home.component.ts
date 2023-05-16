import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { IndexNameUrl } from 'src/app/interfaces/index-name-url';
import { Spell } from 'src/app/interfaces/spell';
import { SpellService } from 'src/app/services/spell.service';

@Component({
  selector: 'app-spells-home',
  templateUrl: './spells-home.component.html',
  styleUrls: ['./spells-home.component.scss']
})
export class SpellsHomeComponent implements OnInit {

  spellList: DataSource<ModifiedSpell> = new DataSource<ModifiedSpell>([])

  constructor(
    private spellService: SpellService
  ){}

  ngOnInit(): void {
    this.getAllSpells()
  }

  getAllSpells() {
    this.spellService.getAllSpells().subscribe(spellList => {
      const modSpellList: ModifiedSpell[] = spellList.map(l => ({
        ...l,
        classNames: l.classes.reduce((acc: string[], cur: IndexNameUrl) => {
          return [...acc, cur.name]
        }, [])
      })).sort((a, b) => a.level - b.level)

      this.spellList = new DataSource(modSpellList)
    })
  }

  navToDetail(event: any) {
    console.log(event)
  }

}

type ModifiedSpell = Spell & { classNames: string[]}
