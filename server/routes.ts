import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  // Add API routes here if needed in the future
  // This portfolio site is frontend-only, so no routes needed yet
  
  return createServer(app);
}
