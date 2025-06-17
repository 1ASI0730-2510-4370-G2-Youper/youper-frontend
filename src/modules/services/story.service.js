import httpInstance from "@/shared/services/http.instance.js";

export class StoryService {
    resourceEndpoint = import.meta.env.VITE_STORIES_ENDPOINT_PATH;

    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }
}