import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main id="main">
        
        <div class="container content">
          <h1>${entry.getIn(["data", "title"], null)}</h1>
        </div>

				<div class="container">
					<div class="container content bg-white">
            ${this.props.widgetFor("body")}
          </div>
        </div>
      </main>
    `;
  }
});

export default Page;
