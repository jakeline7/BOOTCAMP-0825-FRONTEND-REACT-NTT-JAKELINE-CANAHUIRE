export interface Meta
  extends Omit<MetaResponse, "qrCode"> {}

export interface MetaResponse {
  createdAt: Date;
  updatedAt: Date;
  barcode:   string;
  qrCode:    string;
}
