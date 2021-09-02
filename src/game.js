import Icon from "./components/Icon.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import { useState,useContext } from "react";
import ContextTheme from "./context/contextTheme";
import AppTheme from "./AppTheme";
import ThemeToggler from "./components/themeToggler";

//Creating an array with 9 fields. Initially all the fields are empty.
const fieldArray = new Array(9).fill("empty");

const Game = () => {
  const theme = useContext(ContextTheme)[0];//default value
  const currentTheme = AppTheme[theme];
  
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  //reload the game
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    fieldArray.fill("empty", 0, 9);
  };
  //check for the winner
  const checkWinner = () => {
    if (
      fieldArray[0] === fieldArray[1] &&
      fieldArray[0] === fieldArray[2] &&
      fieldArray[0] !== "empty"
    ) {
      setWinMessage(`${fieldArray[0]} won`);
    } else if (
      fieldArray[3] === fieldArray[4] &&
      fieldArray[3] === fieldArray[5] &&
      fieldArray[3] !== "empty"
    ) {
      setWinMessage(`${fieldArray[3]} won`);
    } else if (
      fieldArray[6] === fieldArray[7] &&
      fieldArray[6] === fieldArray[8] &&
      fieldArray[6] !== "empty"
    ) {
      setWinMessage(`${fieldArray[6]} won`);
    } else if (
      fieldArray[0] === fieldArray[3] &&
      fieldArray[0] === fieldArray[6] &&
      fieldArray[0] !== "empty"
    ) {
      setWinMessage(`${fieldArray[0]} won`);
    } else if (
      fieldArray[1] === fieldArray[4] &&
      fieldArray[1] === fieldArray[7] &&
      fieldArray[1] !== "empty"
    ) {
      setWinMessage(`${fieldArray[1]} won`);
    } else if (
      fieldArray[2] === fieldArray[5] &&
      fieldArray[2] === fieldArray[8] &&
      fieldArray[2] !== "empty"
    ) {
      setWinMessage(`${fieldArray[2]} won`);
    } else if (
      fieldArray[2] === fieldArray[4] &&
      fieldArray[4] === fieldArray[6] &&
      fieldArray[2] !== "empty"
    ) {
      setWinMessage(`${fieldArray[2]} won`);
    } else if (
      fieldArray[0] === fieldArray[4] &&
      fieldArray[4] === fieldArray[8] &&
      fieldArray[0] !== "empty"
    ) {
      setWinMessage(`${fieldArray[0]} won`);
    }
  };
  //change the field
  const changeField = (fieldNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (fieldArray[fieldNumber] === "empty") {
      fieldArray[fieldNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross); //toggling the turn
    } else {
      return toast("Already Marked", { type: "error" });
    }
    checkWinner();
  };
  return (
    <div style={{backgroundColor:`${currentTheme.backgroundColor}`}}>
    <Container className="p-5" >
      {/* <div style={{display:"flex"}}> */}
      <ThemeToggler />
      <h1 className="text-center display-1" style={{color:`${currentTheme.textColor}` }}>Tic Tac Toe</h1>
     
      {/* </div> */}
      <ToastContainer position="top-right" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="my-3">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
            </div>
          ) : (
            <h1 className="text-center text-warning my-3">
              {fieldArray.includes("empty")
                ? isCross
                  ? "Cross Turns"
                  : "Circle Turns"
                : "Match Draw!!"}
            </h1>
          )}
          <div className="grid">
            {fieldArray.map((item, index) => (
              <Card onClick={() => changeField(index)}>
                {/* remember here the calling */}

                <CardBody className={`box box-${index}`}>
                  <Icon name={item} className="icon" />
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="text-center mt-5 mb-2">
            {winMessage ? (
              <Button color="success" block onClick={reloadGame}>
                Reload the Game
              </Button>
            ) : (
              <Button color="warning" block onClick={reloadGame}>
                Reload the Game
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Game;
