import { title } from "@/components/primitives";
export default function Deserts() {
  return (
    <div>
      <h1 className={title()}>Deserts</h1>
      <div>
        <p>
          <b>Indian Deserts</b>
        </p>
        <ul>
          <li>Gulab Jamun</li>
          <li>Rasa Gulla</li>
          <li>Laung Latta</li>
          <li>Khaja</li>
          <li>Boondi Laddu</li>
          <li>Moori Laddu</li>
        </ul>
        <p>
          <b>Global Deserts: Cakes</b>
        </p>
        <ul>
          <li>Vanilla</li>
          <li>Chocolate</li>
          <li>Dark Chocolate</li>
          <li>White Chocolate</li>
          <li>Pineapple</li>
          <li>Mango</li>
          <li>Banana</li>
          <li>Orange</li>
          <li>Tres Leches</li>
          <li>Rose Tres Leches</li>
          <li>Oreo</li>
        </ul>
        <p>
          <b>Global Deserts: Other</b>
        </p>
        <ul>
          <li>Croissant</li>
          <li>Chocolate Chip Cookies</li>
          <li>Beignets</li>
          <li>Brownies</li>
          <li>Scoopable Cookies</li>
        </ul>
      </div>
    </div>
  );
}
