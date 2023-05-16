import { IndexNameUrl } from "./index-name-url";

export interface Spell {
    index: string;
    name: string;
    desc: string[];
    higher_level?: string[];
    range: string;
    components: string[];
    material?: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    attack_type?: string;
    heal_at_slot_level?: {};
    damage?: {
        damage_type?: IndexNameUrl,
        damage_at_character_level?: {}
        damage_at_slot_level?: {};
    };
    dc?: {
        dc_type?: IndexNameUrl,
        dc_success?: string;
        desc?: string;
    };
    area_of_effect?: { type: string; size: number };
    school: IndexNameUrl;
    classes: IndexNameUrl[];
    subclasses: IndexNameUrl[];
    url: string;
}


