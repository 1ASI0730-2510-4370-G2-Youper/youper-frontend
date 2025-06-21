import httpInstance from "@/shared/services/http.instance.js";

export class TipService {
    resourceEndpoint = import.meta.env.VITE_TIPS_ENDPOINT_PATH;

    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }
}