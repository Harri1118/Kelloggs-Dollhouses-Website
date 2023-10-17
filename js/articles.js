fetch("./json/articles.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (articles) {
    let articlesTable = document.querySelector("#article-table tbody");
    let out = "<tr>"; // Start a new row
    let articleCount = 0;

    for (let article of articles) {
      out += `
      <td class="article_cell">
        <a href="${article.link}" 
        id="${article.id}"
        class="article_cell"
        ">
          <img src="${article.icon}"
            alt="${article.title}"
            width="150"
          >
        </a>
        <br clear="all">`;
      if (article.date != undefined) {
        out += `<span class="article_date">${article.date}</span>`;
      }
      out += `
        <br>
        <a class="article_link" href="${article.link}">${article.title}</a>
        <br>
        by ${article.author}
        <br>
        <br>
        <br>
      </td>
    `;

      articleCount++;

      // Check if three articles are added, then close the row and start a new one
      if (articleCount === 2) {
        out += "</tr><tr>";
        articleCount = 0;
      }
    }

    if (articleCount === 1) {
      out += "<td></td>";
    }

    out += "</tr>";
    articlesTable.innerHTML = out;
  });

/*
List of unknown images:
http://www.kelloggsdollhouses.com/images/gallery/InsideHouse.jpg
http://www.kelloggsdollhouses.com/images/gallery/YellowHouse.jpg
http://www.kelloggsdollhouses.com/images/gallery/Bungalow.jpg
http://www.kelloggsdollhouses.com/images/gallery/SFHouse.jpg
http://www.kelloggsdollhouses.com/images/gallery/YellowCottage.jpg
http://www.kelloggsdollhouses.com/images/gallery/RedCape.jpg
http://www.kelloggsdollhouses.com/images/gallery/NatCottage.jpg
http://www.kelloggsdollhouses.com/images/gallery/GreenCottage.jpg
http://www.kelloggsdollhouses.com/images/gallery/BlueHSE.jpg
http://www.kelloggsdollhouses.com/images/gallery/FarmHouse.jpg
http://www.kelloggsdollhouses.com/images/gallery/White.jpg
http://www.kelloggsdollhouses.com/images/gallery/WhiteInterior.jpg
http://www.kelloggsdollhouses.com/images/gallery/BlueCape.jpg
http://www.kelloggsdollhouses.com/images/gallery/TowerHouse.jpg
http://www.kelloggsdollhouses.com/images/gallery/HandCraftedHouse1.jpg
http://www.kelloggsdollhouses.com/images/gallery/HandCraftedHouse2.jpg
http://www.kelloggsdollhouses.com/images/gallery/CustomizedCommercialShell.jpg
http://www.kelloggsdollhouses.com/images/gallery/LightBlueHouse.jpg

These are together.
http://www.kelloggsdollhouses.com/images/gallery/RedWithFrontPorch.jpg
http://www.kelloggsdollhouses.com/images/gallery/RedPorch.jpg
*/

/**
 * 
 * Unused Article:
 *     {
        "id": 9,
        "icon": "http://www.kelloggsdollhouses.com/images/articles/nytimes.gif",
        "title": "Dream Houses With No Lawn to Mow",
        "date": "May 31, 1990",
        "author": "Elaine Louie",
        "desc": "",
        "link": "http://www.kelloggsdollhouses.com/articles/NYTimes.html"
    }
 */