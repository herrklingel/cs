export interface Car {
  status: CarStatus;
  brand: string;
  createdAt: string;
  id: number;
  lastUpdatedAt: string;
  licensePlate: string;
}

export type CarStatus = "available" | "in-maintenance" | "out-of-service";
