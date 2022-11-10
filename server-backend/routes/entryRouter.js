const express = require("express")
const entryRouter = express.Router()
const Entry = require('../models/entry.js')

// Get All Entries
entryRouter.get("/", (req, res, next) => {
  Entry.find((err, entries) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(entries)
  })
})

// Get Entries by user id
entryRouter.get("/user", (req, res, next) => {
  Entry.find({ user: req.auth._id }, (err, entries) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(entries)
  })
})

// Add new Entry
entryRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newEntry = new Entry(req.body)
  newEntry.save((err, savedEntry) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedEntry)
  })
})

// Delete Entry
entryRouter.delete("/:entryId", (req, res, next) => {
  Entry.findOneAndDelete(
    { _id: req.params.entryId, user: req.auth._id },
    (err, deletedEntry) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete entry: ${deletedEntry.text}`)
    }
  )
})

// Update Entry
entryRouter.put("/:entryId", (req, res, next) => {
  Entry.findOneAndUpdate(
    { _id: req.params.entryId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedEntry) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedEntry)
    }
  )
})

module.exports = entryRouter