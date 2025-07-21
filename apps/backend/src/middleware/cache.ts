import { Request, Response, NextFunction } from 'express'
import NodeCache from 'node-cache'
export const cache = new NodeCache({ stdTTL: 86400, checkperiod: 60 })

export const checkCache =
  (key: string) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const cachedData = cache.get(key)

    if (cachedData) {
      res.send(cachedData)
    } else {
      next()
    }
  }
