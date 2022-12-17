import { FC, memo } from "react";
import { useParams } from "react-router-dom";

type OrderDetailPageProps = {};

const OrderDetailPage: FC<OrderDetailPageProps> = (props) => {
  const params = useParams();
  const orderId = params.orderId && +params.orderId;

  return <>This is detail page for order number {orderId}</>;
};

OrderDetailPage.defaultProps = {};

export default memo(OrderDetailPage);
