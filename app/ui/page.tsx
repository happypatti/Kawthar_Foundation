import InfiniteScroll from "@/components/shared/infinite-scroll";

export default async function ui() {
  return (
    <div>
      <h1 className="text-center">Component Staging</h1>
      <div className="component-container">
        <InfiniteScroll>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
        </InfiniteScroll>
      </div>
    </div>
  );
}
