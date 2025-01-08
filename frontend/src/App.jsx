import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { fetchTranslation } from "./api";

const App = () => {
  const [inputText, setInputText] = useState("Thank you for choosing me!");
  const [translatedText, setTranslatedText] = useState("");
  const handleTranslate = async () => {
    try {
      const result = await fetchTranslation(inputText);
      console.log(result);
      const translated =
        result.translatedText ||
        result.translation ||
        result.data ||
        "Translation not found";
      setTranslatedText(translated);
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslatedText("Error: Unable to translate text.");
    }
  };
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Google Translator
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Enter Text to Translate"
          variant="outlined"
          fullWidth
          margin="normal"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleTranslate}
          style={{ marginTop: "1rem" }}
        >
          Translate
        </Button>
        <TextField
          label="Translated Text"
          variant="outlined"
          fullWidth
          margin="normal"
          value={translatedText}
          InputProps={{
            readOnly: true,
          }}
          style={{ marginTop: "1rem" }}
        />
      </Box>
    </Container>
  );
};

export default App;
