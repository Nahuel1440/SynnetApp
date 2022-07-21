import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postInscription } from "../../redux/actions";
import Stripecheckout from "react-stripe-checkout";
import Card from "react-bootstrap/Card";

export default function SubtCard({
  id_subt,
  name,
  price,
  id_tournament,
  id_user,
  email,
  subt_gender,
  subt_category,
  match_type,
  el_type
}) {
  const user = id_user;
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState({
    name: name,
    price: price,
    email: email,
    gender: subt_gender,
    category: subt_category,
    id_tournament: id_tournament,
    id_subt: id_subt,
  });

  const makePayment = (token) => {
    const body = {
      token,
      user,
      product,
    };
    dispatch(postInscription(body));
  };
  return (
    <React.Fragment>
      <Card
        bg="light"
        style={{ width: "24rem" }}
        className="mb-2"
        key={id_subt}
      >
        <Card.Header>
          <Card.Title>
            <div>{product.name}</div>
          </Card.Title>
        </Card.Header>
        <Card.Body className="row">
          <div className="col">
            <Card.Subtitle>
              <div>Gender: {product.gender}</div>
            </Card.Subtitle>
            <Card.Subtitle>
              <div>Category: {product.category.type}</div>
            </Card.Subtitle>
            <Card.Subtitle>
              <div>Match Type: {match_type}</div>
            </Card.Subtitle>
            <Card.Subtitle>
              <div>Elimination Type: {el_type}</div>
            </Card.Subtitle>
          </div>
          <div className="col">
            {" "}
            <Card.Title>US$ {product.price}</Card.Title>
          </div>
        </Card.Body>
        <Card.Footer >
          <div className="d-flex justify-content-end">
          <Stripecheckout
            stripeKey="pk_test_51LLBogC5JnQCZsvqgXxqWC00Ui3tQXiMSljwFGFv28WhZ69g54hmBGjb9XKE1mjZTsipyzW49f7CQ8G1qS6lWL9H00MY1ocH5Z"
            token={makePayment}
            name={`Buy ${product.name}`}
            amount={product.price * 100}
            email={product.email}
          >
            <button className="btn btn-primary ">Buy</button>
          </Stripecheckout>
          </div>
          
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
}
