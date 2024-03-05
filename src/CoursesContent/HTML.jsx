export default function HTML() {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-16">
         <h2 className="font-semibold text-3xl mb-5">What is HTML?</h2>
         <ul className="text-sm pl-10 space-y-2">
            <li className="list-disc leading-relaxed">HTML stands for Hyper Text Markup Language</li>
            <li className="list-disc leading-relaxed">HTML is the standard markup language for creating Web pages</li>
            <li className="list-disc leading-relaxed">HTML describes the structure of a Web page</li>
            <li className="list-disc leading-relaxed">HTML consists of a series of elements</li>
            <li className="list-disc leading-relaxed">HTML elements tell the browser how to display the content</li>
            <li className="list-disc leading-relaxed">HTML elements label pieces of content such as this is a heading, this is a paragraph, this is a link, etc.</li>
         </ul>
         <div className="mt-10">
            <h2 className="font-semibold text-3xl mb-5">HTML Page Structure</h2>
            <p className="leading-relaxed text-gray-700">Below is a visualization of an HTML page structure:</p>
            <img src='https://1.bp.blogspot.com/-DFL331pZ5Dw/Xs59XHET07I/AAAAAAAAAZU/tbKJGJaGziYlE9K7YkQ-amjACkvm79M7wCK4BGAsYHg/d/Structure-Of-HTML-Document.jpg' alt='/' />
         </div>
         <div className="mt-10 space-y-5">
            <h2 className="font-semibold text-3xl">Web Browser</h2>
            <p className="leading-relaxed text-gray-700">The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.</p>
            <p className="leading-relaxed text-gray-700">A browser does not display the HTML tags, but uses them to determine how to display the document:</p>
            <img src="https://www.w3schools.com/html/img_chrome.png" alt="" />
         </div>
      </div>
    )
}