export interface Beer {
  id: number | 0;
  name: string | "";
  tagline: string | "";
  first_brewed: string | "";
  description: string | "";
  image_url: string | "";
  abv: number | 0;
  ibu: number | null;
  target_fg: number | null;
  target_og: number | null;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuation_level: number | null;
  volume: TempAmountVolume | null;
  boil_volume: TempAmountVolume | null;
  method: Method | null;
  ingredients: Ingredients | null;
  food_pairing: Array<string> | null;
  brewers_tips: string | "";
  contributed_by: string | "";
}

export interface TempAmountVolume {
  value: number | null;
  unit: string | "";
}
export interface Method {
  mash_temp?: Array<MashTemp> | null;
  fermentation: Fermentation  | null;
  twist: string | null;
}
export interface MashTemp {
  temp: TempAmountVolume  | null;
  duration?: number | null;
}
export interface Fermentation {
  temp: TempAmountVolume | null;
}
export interface Ingredients {
  malt?: Array<Malt> | null;
  hops?: Array<Hops> | null;
  yeast: string | "";
}
export interface Malt {
  name: string | "";
  amount: TempAmountVolume | null;
}
export interface Hops {
  name: string | "";
  amount: TempAmountVolume | null;
  add: string | "";
  attribute: string | "";
}


