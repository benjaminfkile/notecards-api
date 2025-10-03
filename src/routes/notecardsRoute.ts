import { Router, Request, Response } from "express";

const router = Router();

// GET /notecards → return hard-coded JSON
router.get("/", (req: Request, res: Response) => {
  const notecards = [
    { id: 1, front: "What is the capital of France?", back: "Paris" },
    { id: 2, front: "What is 2 + 2?", back: "4" },
    { id: 3, front: "Who wrote 'Hamlet'?", back: "William Shakespeare" },
    { id: 4, front: "What's your name?", back: "Ben Kile" },
  ];

  res.json(notecards);
});

export default router;
