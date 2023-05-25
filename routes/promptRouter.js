const express = require("express")
const promptRouter = express.Router()
const Prompt = require('../models/prompt.js')

// Get All Prompts
promptRouter.get("/", (req, res, next) => {
  Prompt.find((err, prompts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(prompts)
  })
})

// Get Prompts by promptId
promptRouter.get("/:promptId", (req, res, next) => {
  Prompt.find({ user: req.params.promptId }, (err, prompts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(prompts)
  })
})

// Add new Prompt
promptRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newprompt = new Prompt(req.body)
  newprompt.save((err, savedPrompt) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedPrompt)
  })
})

// Delete Prompt
promptRouter.delete("/:promptId", (req, res, next) => {
  Prompt.findOneAndDelete(
    { _id: req.params.promptId, user: req.auth._id },
    (err, deletedPrompt) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete prompt: ${deletedPrompt.title}`)
    }
  )
})

// Update Prompt
promptRouter.put("/:promptId", (req, res, next) => {
  Prompt.findOneAndUpdate(
    { _id: req.params.promptId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedPrompt) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPrompt)
    }
  )
})

module.exports = promptRouter