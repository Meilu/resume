import { Router } from "express";
import { db } from "../firebase";
import { authenticateToken } from "../middleware/auth";

import NodeCache from "node-cache";

const router = Router();
const cache = new NodeCache({ stdTTL: 3600 });

const KEY = "key";

// This test function exists in case i ever need a backend API call for my project.
// In this function i connect to my firestore database and retrieve a certain key.
// For my Resume project a backend was not needed.
router.get("/", authenticateToken, async (req, res) => {
  try {
    const cachedSites = cache.get<[]>(KEY);

    if (cachedSites) {
      res.json(cachedSites);
      return;
    }

    const snapshot = await db.collection(KEY).get();
    // const sites = snapshot.docs.map((doc) => firestoreDocToDiveSite(doc));
    // cache.set(KEY, sites);
    res.json([]);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
