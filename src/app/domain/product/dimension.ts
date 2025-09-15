export interface Dimensions extends Omit<DimensionsResponse, "depth"> {}

export interface DimensionsResponse {
  width:  number;
  height: number;
  depth:  number;
}
