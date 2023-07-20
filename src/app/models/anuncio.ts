import {Picture} from "./picture";

export class Anuncio {
  id?: number;
  title?: string;
  price?: number;
  licensePlate?: string;
  isHighlight?: boolean = false;
  description?: string;
  brand?: number;
  model?: string;
  version?: string;
  year?: number;
  transmission?: number;
  mileage?: number;

  isFourDoor?: boolean = false;
  isAirBag?: boolean = false;
  isAlarm?: boolean = false;
  isAirConditioning?: boolean = false;
  isHydraulicSteering?: boolean = false;
  isFlexFuel?: boolean = false;
  isSound?: boolean = false;
  isParkAssist?: boolean = false;

  color?: number;

  isFirstOwner?: boolean = false;
  isManual?: boolean = false;
  isKeyCopy?: boolean = false;
  isWithDealershipService?: boolean = false;
  isWithWarranty?: boolean = false;

  pictures: Picture[] = [];
}

export const BRANDS = [
  'ACURA',
  'AGRALE',
  'ALFA ROMEO',
  'AM GEN',
  'AMERICAR',
  'ASIA MOTORS',
  'ASTON MARTIN',
  'AUDI',
  'BABY',
  'BENTLEY',
  'BMW',
  'BRM',
  'BUGGY',
  'BUGRE',
  'BYD',
  'CAB MOTORS',
  'CADILLAC',
  'CBT JIPE',
  'CHANA',
  'CHANGAN',
  'CHERY',
  'CHEVROLET',
  'CHRYSLER',
  'CITROEN',
  'CROSS LANDER',
  'D2D',
  'DAEWOO',
  'DAIHATSU',
  'DKW VEMAG',
  'DODGE',
  'EFFA',
  'ENGESA',
  'ENVEMO',
  'FERRARI',
  'FIAT',
  'FIBRAVAN',
  'FORD',
  'FOTON',
  'FYBER',
  'GEELY',
  'GREAT WALL',
  'GURGEL',
  'GWM',
  'HAFEI',
  'HITECH ELETRIC',
  'HONDA',
  'HYUNDAI',
  'INFINITI',
  'ISUZU',
  'IVECO',
  'JAC',
  'JAGUAR',
  'JEEP',
  'JINBEI',
  'JPX',
  'KIA MOTORS',
  'LADA',
  'LAMBORGHINI',
  'LAND ROVER',
  'LANDWIND',
  'LEXUS',
  'LIFAN',
  'LOBINI',
  'LOTUS',
  'MAHINDRA',
  'MASERATI',
  'MATRA',
  'MAZDA',
  'MCLAREN',
  'MERCEDES-BENZ',
  'MERCURY',
  'MG',
  'MINI',
  'MITSUBISHI',
  'MIURA',
  'MON',
  'MP LAFER',
  'NISSAN',
  'PEUGEOT',
  'PLYMOUTH',
  'PONTIAC',
  'PORSCHE',
  'PUMA',
  'RAM',
  'RELY',
  'RENAULT',
  'RIVIAN',
  'ROLLS-ROYCE',
  'ROVER',
  'SAAB',
  'SATURN',
  'SEAT',
  'SHINERAY',
  'SMART',
  'SSANGYONG',
  'SUBARU',
  'SUNBEAM TALBOT',
  'SUZUKI',
  'SWELL MINI VEICULOS',
  'TAC',
  'TESLA',
  'TOYOTA',
  'TROLLER',
  'VENTURA',
  'VOLKSWAGEN',
  'VOLVO',
  'WAKE',
  'WALK',
  'WILLYS OVERLAND'
];

export const TRANSMISSIONS = [
  'Manual',
  'Automático',
  'Semi-Automático'
];

export const COLORS = [
  'Preto',
  'Branco',
  'Prata',
  'Vermelho',
  'Cinza',
  'Azul',
  'Amarelo',
  'Verde',
  'Laranja',
  'Outra'
];
