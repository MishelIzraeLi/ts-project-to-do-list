import { useState, useEffect } from "react";
import type { Quote } from "../types/Quote";

/**
 * Displays a random inspirational quote from an external API.
 * Handles loading states and API errors.
 * @returns The quote box component.
 */
function QuoteBox() {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    /**
     * Fetches a random quote from the Quotable API.
     * Updates the quote, loading and error states.
     * @returns A promise that resolves when the request is completed.
     */
    async function fetchQuote(): Promise<void> {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "https://api.quotable.io/random"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }

            const data: Quote = await response.json();

            setQuote(data);

        } catch (error) {
            setError("Unable to load inspirational quote.");
            console.error(error);

        } finally {
            setLoading(false);
        }
    }

    /**
     * Fetches a quote when the component is first mounted.
     */
    useEffect(() => {
        void fetchQuote();
    }, []);

    return (
        <div className="quote-box">
            {loading ? (
                <p>Loading quote...</p>
            ) : error ? (
                <p>{error}</p>
            ) : quote ? (
                <div>
                    <h3>Daily Inspiration</h3>
                    <p>"{quote.content}"</p>
                    <p>- {quote.author}</p>
                </div>
            ) : null}
        </div>
    );
}

export default QuoteBox;