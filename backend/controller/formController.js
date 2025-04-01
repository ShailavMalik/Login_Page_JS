import Name from "../models/name.model.js";

export const submitForm = async (req, res) => {
  const nameValue = req.body.name;
  if (!nameValue) res.status(400).send("Fill all the fields");
  //* 400 Invalid Request

  const newName = new Name({
    name: nameValue,
  });

  try {
    await newName.save();
    console.log("Form Submitted");
    res.status(201).send("Form submitted sucessfully"); //* 201 Resource Created
  } catch (error) {
    console.log("Error in sending form");
    res.status(500).send("Internal Server Error"); //* 500 Internal Server Error
  }
};
