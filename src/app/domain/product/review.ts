export interface Review
  extends Omit<ReviewResponse, "reviewerEmail"> {}

export interface ReviewResponse {
  rating:        number;
  comment:       string;
  date:          Date;
  reviewerName:  string;
  reviewerEmail: string;
}

