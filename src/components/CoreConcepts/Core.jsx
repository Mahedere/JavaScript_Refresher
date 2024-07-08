import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcepts";
export default function Core() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept, index) => (
                    <CoreConcept key={index} {...concept} />
                ))}
            </ul>
        </section>)
}