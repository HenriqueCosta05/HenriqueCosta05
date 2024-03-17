import React, { useState } from "react";
import { Button } from './style/theme/Button';

function Homepage() {
  return (
    <>
      <Button defaultValue="Mudar tema" type="text" $bgColor="#7B4AE2" $border="1px solid #fff">Clique aqui!</Button>
    </>
  );
}

export default Homepage;
