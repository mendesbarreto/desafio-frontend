import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faYahoo } from '@fortawesome/free-brands-svg-icons';


import AuthService from "../services/auth.service";

let popup!: Window;

const Authorization: React.FC = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasCode = !!params.get('code');

    if (hasCode) {
      const parentWindow = (window.opener as Window);
      const code = params.get('code');

      parentWindow.postMessage(code, '*');
    } else {
      listenerMessages();
    }
  }, []);

  function listenerMessages() {
    window.onmessage = (e: MessageEvent) => receiveMessageCode(e)
  }

  function receiveMessageCode(event: MessageEvent) {
    if (event.source === popup) {
      const code = event.data;
      /** Need validations */

      popup.close();
      onRequestToken(code);
    }
  }

  function onRequestCode() {
    popup = AuthService.openPopupRequestCode()
  }

  function onRequestToken(code: string) {
    setLoading(true);

    AuthService.requestToken(code)
      .then(() => history.push('/'))
      .catch(err => console.log(err));
  }

  return (
    <AuthorizationStyled>
      <Button onClick={() => onRequestCode()}>
        <FontAwesomeIcon style={{ marginRight: '8px' }} icon={loading ? faSpinner : faYahoo} spin={loading} />
        <span>{loading ? 'Aguarde...' : 'Login com Yahoo'}</span>
      </Button>
      <Helper>Entre com seu login para ter acesso</Helper>
    </AuthorizationStyled>
  )
}

const AuthorizationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(0deg, #4F62FE 0%, #3B16A5 100%);
`

const Helper = styled.p`
  color: white;
  margin: 8px 0;
`

const Button = styled.button`
  background: #3B16A5;
  color: white;
  border: 0.5px solid #fafafa;
  padding: 12px 24px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
`

export default Authorization;
