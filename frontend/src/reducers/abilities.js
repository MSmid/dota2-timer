/*
Things you should never do inside a reducer:

Mutate its arguments;
Perform side effects like API calls and routing transitions;
Call non-pure functions, e.g. Date.now() or Math.random().
*/

// import {
//   TIMER_ADD
// } from "../actions/timer.js";

const initialState = {
  abilities: [
    {
      displayName: 'Black Hole',
      name: 'enigma_black_hole',
      id: 5149,
      heroId: 33,
      cooldowns: [200, 180, 160]
    },
    {
      displayName: 'Chain Frost',
      name: 'lich_chain_frost',
      id: '5137',
      heroId: '31',
      cooldowns: [100, 80, 60]
    },
    {
      displayName: 'Chain Frost',
      name: 'warlock_chaotic_offering',
      id: 5165,
      heroId: 37,
      cooldowns: [165]
    },
    {
      displayName: 'Chronosphere',
      name: 'faceless_void_chronosphere',
      id: 5185,
      heroId: 41,
      cooldowns: [140, 125, 110],
      aghanimCooldowns: [60]
    },
    {
      displayName: 'Dark Rift',
      name: 'abyssal_underlord_dark_rift',
      id: 5616,
      heroId: 108,
      cooldowns: [130, 120, 110]
    },
    {
      displayName: 'Darkness',
      name: 'night_stalker_darkness',
      id: 5278,
      heroId: 60,
      cooldowns: [160, 120, 80]
    },
    {
      displayName: 'Death Ward',
      name: 'witch_doctor_death_ward',
      id: 5141,
      heroId: 30,
      cooldowns: [80]
    },
    {
      displayName: 'Doom',
      name: 'doom_bringer_doom',
      id: 5342,
      heroId: 69,
      cooldowns: [145]
    },
    {
      displayName: 'Earth Splitter',
      name: 'elder_titan_earth_splitter',
      id: 5594,
      heroId: 103,
      cooldowns: [100]
    },
    {
      displayName: 'Echo Slam',
      name: 'earthshaker_echo_slam',
      id: 5026,
      heroId: 7,
      cooldowns: [150, 130, 110]
    },
    {
      displayName: 'Eclipse',
      name: 'luna_eclipse',
      id: 5225,
      heroId: 48,
      cooldowns: [140]
    },
    {
      displayName: 'Elder Dragon Form',
      name: 'dragon_knight_elder_dragon_form',
      id: 5229,
      heroId: 49,
      cooldowns: [115]
    },
    {
      displayName: 'Epicenter',
      name: 'sandking_epicenter',
      id: 5105,
      heroId: 16,
      cooldowns: [120, 110, 100]
    },
    {
      displayName: 'Exorcism',
      name: 'death_prophet_exorcism',
      id: 5093,
      heroId: 43,
      cooldowns: [145],
      talentCooldownReduction: 10
    },
    {
      displayName: 'Eye of the Storm',
      name: 'razor_eye_of_the_storm',
      id: 5085,
      heroId: 15,
      cooldowns: [80, 70, 60]
    },
    {
      displayName: 'False Promise',
      name: 'oracle_false_promise',
      id: 5640,
      heroId: 111,
      cooldowns: [100, 65, 30]
    },
    {
      displayName: "Fiend's Grip",
      name: 'bane_fiends_grip',
      id: 5013,
      heroId: 3,
      cooldowns: [100]
    },
    {
      displayName: "Finger of Death",
      name: 'lion_finger_of_death',
      id: 5047,
      heroId: 26,
      cooldowns: [160, 100, 40],
      aghanimCooldowns: [100, 60, 20]
    },
    {
      displayName: "Flaming Lasso",
      name: 'batrider_flaming_lasso',
      id: 5323,
      heroId: 65,
      cooldowns: [90, 75, 60],
      talentCooldownReduction: 15
    },
    {
      displayName: "Flesh Golem",
      name: 'undying_flesh_golem',
      id: 5447,
      heroId: 85,
      cooldowns: [75]
    },
    {
      displayName: "Freezing Field",
      name: 'crystal_maiden_freezing_field',
      id: 5129,
      heroId: 5,
      cooldowns: [110, 100, 90]
    },
    {
      displayName: "Global Silence",
      name: 'silencer_global_silence',
      id: 5380,
      heroId: 75,
      cooldowns: [130]
    },
    {
      displayName: "God's Strength",
      name: 'sven_gods_strength',
      id: 5097,
      heroId: 18,
      cooldowns: [80]
    },
    {
      displayName: "Guardian Angel",
      name: 'omniknight_guardian_angel',
      id: 5266,
      heroId: 57,
      cooldowns: [160]
    },
    {
      displayName: "Hand of God",
      name: 'chen_hand_of_god',
      id: 5331,
      heroId: 66,
      cooldowns: [160, 140, 120]
    },
    {
      displayName: "Haunt",
      name: 'spectre_haunt',
      id: 5337,
      heroId: 67,
      cooldowns: [180, 150, 120]
    },
    {
      displayName: "Infest",
      name: 'life_stealer_infest',
      id: 5252,
      heroId: 54,
      cooldowns: [100, 75, 50]
    },
    {
      displayName: "Laguna Blade",
      name: 'lina_laguna_blade',
      id: 5043,
      heroId: 25,
      cooldowns: [70, 60, 50]
    },
    {
      displayName: "Macropyre",
      name: 'jakiro_macropyre',
      id: 5300,
      heroId: 64,
      cooldowns: [60]
    },
    {
      displayName: "Mana Void",
      name: 'antimage_mana_void',
      id: 5006,
      heroId: 1,
      cooldowns: [70],
      talentCooldowns: [20]
    },
    {
      displayName: "Mass Serpent Ward",
      name: 'shadow_shaman_mass_serpent_ward',
      id: 5081,
      heroId: 27,
      cooldowns: [120]
    },
    {
      displayName: "Metamorphosis",
      name: 'terrorblade_metamorphosis',
      id: 5621,
      heroId: 109,
      cooldowns: [140]
    },
    {
      displayName: "Moonlight Shadow",
      name: 'mirana_moonlight_shadow',
      id: 5049,
      heroId: 9,
      cooldowns: [140, 120, 100]
    },
    {
      displayName: "Replicate",
      name: 'morphling_replicate',
      id: 5057,
      heroId: 10,
      cooldowns: [80],
      talentCooldownReduction: 12
    },
    {
      displayName: "Nether Strike",
      name: 'spirit_breaker_nether_strike',
      id: 5356,
      heroId: 71,
      cooldowns: [80, 70, 60],
      aghanimCooldowns: [20]
    },
    {
      displayName: "Omnislash",
      name: 'juggernaut_omni_slash',
      id: 5030,
      heroId: 8,
      cooldowns: [130, 120, 110],
      aghanimCooldowns: [70]
    },
    {
      displayName: "Overgrowth",
      name: 'treant_overgrowth',
      id: 5437,
      heroId: 83,
      cooldowns: [100, 85, 70],
      talentCooldownReduction: 15
    },
    {
      displayName: "Phantasm",
      name: 'chaos_knight_phantasm',
      id: 5429,
      heroId: 81,
      cooldowns: [130],
      aghanimCooldowns: [110],
      talentCooldownReduction: 20
    },
    {
      displayName: "Poison Nova",
      name: 'venomancer_poison_nova',
      id: 5181,
      heroId: 40,
      cooldowns: [140, 120, 100],
      aghanimCooldowns: [140, 120, 60]
    },
    {
      displayName: "Primal Roar",
      name: 'beastmaster_primal_roar',
      id: 5177,
      heroId: 38,
      cooldowns: [80, 75, 70],
      aghanimCooldowns: [45],
      talentCooldownReduction: 12
    },
    {
      displayName: "Primal Split",
      name: 'brewmaster_primal_split',
      id: 5403,
      heroId: 78,
      cooldowns: [140, 120, 100]
    },
    {
      displayName: "Ravage",
      name: 'tidehunter_ravage',
      id: 5121,
      heroId: 29,
      cooldowns: [150],
      talentCooldownReduction: 20
    },
    {
      displayName: "Reaper's Scythe",
      name: 'necrolyte_reapers_scythe',
      id: 5161,
      heroId: 36,
      cooldowns: [100, 85, 70],
      aghanimCooldowns: [55, 40, 25]
    },
    {
      displayName: "Reincarnation",
      name: 'skeleton_king_reincarnation',
      id: 5089,
      heroId: 42,
      cooldowns: [240, 140, 40]
    },
    {
      displayName: "Relocate",
      name: 'wisp_relocate',
      id: 5488,
      heroId: 91,
      cooldowns: [100, 80, 60]
    },
    {
      displayName: "Requiem of Souls",
      name: 'nevermore_requiem',
      id: 5064,
      heroId: 11,
      cooldowns: [120, 110, 100]
    },
    {
      displayName: "Reverse Polarity",
      name: 'magnataur_reverse_polarity',
      id: 5521,
      heroId: 97,
      cooldowns: [120]
    },
    {
      displayName: "Sanity's Eclipse",
      name: 'obsidian_destroyer_sanity_eclipse',
      id: 5394,
      heroId: 76,
      cooldowns: [160]
    },
    {
      displayName: "Shapeshift",
      name: 'lycan_shapeshift',
      id: 5398,
      heroId: 77,
      cooldowns: [120, 90, 60],
      talentCooldownReduction: 15
    },
    {
      displayName: "Song of the Siren",
      name: 'naga_siren_song_of_the_siren',
      id: 5470,
      heroId: 89,
      cooldowns: [160, 120, 80]
    },
    {
      displayName: "Sonic Wave",
      name: 'queenofpain_sonic_wave',
      id: 5176,
      heroId: 39,
      cooldowns: [135],
      aghanimCooldowns: [40],
      talentCooldownReduction: 12
    },
    {
      displayName: "Spirit Form",
      name: 'keeper_of_the_light_spirit_form',
      id: 5474,
      heroId: 90,
      cooldowns: [80, 70, 60],
      aghanimCooldowns: [0]
    },
    {
      displayName: "Stampede",
      name: 'centaur_stampede',
      id: 5517,
      heroId: 96,
      cooldowns: [90, 75, 60]
    },
    {
      displayName: "Static Storm",
      name: 'disruptor_static_storm',
      id: 5461,
      heroId: 87,
      cooldowns: [90, 80, 70]
    },
    {
      displayName: "Stone Gaze",
      name: 'medusa_stone_gaze',
      id: 5507,
      heroId: 94,
      cooldowns: [90]
    },
    {
      displayName: "Summon Familliars",
      name: 'visage_summon_familiars',
      id: 5483,
      heroId: 92,
      cooldowns: [160, 145, 130]
    },
    {
      displayName: "Summon Spirit Bear",
      name: 'lone_druid_spirit_bear',
      id: 5412,
      heroId: 80,
      cooldowns: [120]
    },
    {
      displayName: "Sunder",
      name: 'terrorblade_sunder',
      id: 5622,
      heroId: 109,
      cooldowns: [120, 80, 40],
      talentCooldowns: [90, 50, 10]
    },
    {
      displayName: "Supernova",
      name: 'phoenix_supernova',
      id: 5630,
      heroId: 110,
      cooldowns: [110]
    },
    {
      displayName: "Thundergod's Wrath",
      name: 'zuus_thundergods_wrath',
      id: 5113,
      heroId: 22,
      cooldowns: [90]
    },
    {
      displayName: "Tombstone",
      name: 'undying_tombstone',
      id: 5444,
      heroId: 85,
      cooldowns: [70]
    },
    {
      displayName: "Wall of Replica",
      name: 'dark_seer_wall_of_replica',
      id: 5258,
      heroId: 55,
      cooldowns: [100],
      talentCooldownReduction: 10
    },
    {
      displayName: "Winter's Curse",
      name: 'winter_wyvern_winters_curse',
      id: 5654,
      heroId: 112,
      cooldowns: [80]
    },
    {
      displayName: "Wrath of Nature",
      name: 'furion_wrath_of_nature',
      id: 5248,
      heroId: 53,
      cooldowns: [90, 75, 60]
    },
    {
      displayName: "Wukong's Command",
      name: 'monkey_king_wukongs_command',
      id: undefined,
      heroId: 114,
      cooldowns: [130, 110, 90]
    },
  ]
}

const abilities = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default abilities;
