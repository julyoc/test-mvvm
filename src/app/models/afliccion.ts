export interface Afliccion {
  _id: string;
  idPacient: string;
  description: string;
}

export class Afliccion implements Afliccion{
  _id: string = '';
  idPacient: string = '';
  description: string = '';
}
