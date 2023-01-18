export interface IDish {
  id: number;
  title: string;
  description: string;
  recipe: string | undefined;
  categoryDishId: number | undefined;
  categoryDish: ICategoryDish | undefined;
}

export interface ICategoryDish {
  id: number;
  title: string;
}
export interface IPerson {
  username: string;
  password: string;
}

export interface IAuthRequest {
  username: string;
  password: string;
}
