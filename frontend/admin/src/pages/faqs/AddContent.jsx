import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, md: 600 },
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  //   textAlign: "center",
};

export default function AddContent({ cancel }) {
  const [formData, setFormData] = React.useState({ question: "", answer: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const handlePublish = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
  };
  return (
    <Box sx={style}>
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h2"
        sx={{ fontWeight: "bold" }}
      >
        Add Question
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        Enter the question and answer below
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
          mt: 3,
        }}
      >
        <FormControl fullWidth>
          <FormLabel
            htmlFor="question"
            sx={{ color: "inherit", fontWeight: 500, mb: ".4rem" }}
          >
            Question
          </FormLabel>
          <TextField
            value={formData.question}
            onChange={handleChange}
            name="question"
            id="question"
            fullWidth
            placeholder="Type in your question here"
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel
            htmlFor="answer"
            sx={{ color: "inherit", fontWeight: 500, mb: ".4rem" }}
          >
            Answer
          </FormLabel>
          <TextField
            value={formData.answer}
            onChange={handleChange}
            name="answer"
            id="answer"
            fullWidth
            multiline
            rows={4}
            placeholder="Type in your answer here"
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            gap: 3,
            m: 2,
            mt: 3,
            ml: 0,
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ borderRadius: "8px", p: "10px 25px" }}
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: "8px", p: "10px 20px" }}
            onClic={handlePublish}
          >
            Publish
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
