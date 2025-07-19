import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    console.log('POST /api/jobs called');
    console.log(req.body); // Debugging
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
