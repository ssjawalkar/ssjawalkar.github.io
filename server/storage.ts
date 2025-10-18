// Storage interface for the application
// This portfolio site doesn't require any backend storage

export interface IStorage {
  // Add storage methods here if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {
    // No storage needed for this static portfolio
  }
}

export const storage = new MemStorage();
