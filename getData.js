
window.onload = function () {
    function mainData() {
        var xhr = new XMLHttpRequest();

        var url = 'http://localhost:3000/getmainData';
        xhr.open("GET", url, true);
        
        //get data required from main container from db.json
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var Data = JSON.parse(this.responseText);
                for (let i = 0; i < Data.length; i++) {
                    var mainData = document.getElementById('float-container');

                    var mainDataDiv = document.createElement('div');
                    mainDataDiv.id = "float-child";
                    var nametext = document.createElement('div');
                    nametext.id = "name";
                    nametext.innerHTML = Data[i].name;

                    var descriptiontext = document.createElement('div')
                    descriptiontext.id = "description";
                    descriptiontext.innerHTML = Data[i].desc;

                    mainDataDiv.appendChild(nametext);
                    mainDataDiv.appendChild(descriptiontext);
                    mainData.appendChild(mainDataDiv);
                }
            }
        }
        xhr.send();
    }
    function latestNews() {
        var xhr = new XMLHttpRequest();

        var url = 'http://localhost:3000/getTimeStories';
        xhr.open("GET", url, true);

        //get time stories data from db.json
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var latestNews = JSON.parse(this.responseText);
                for (let i = 0; i < latestNews.length; i++) {
                    //dynamically create a tag
                    var a = document.createElement('a');
                    a.target = '_blank';
                    a.href = latestNews[i].link;
                    a.innerText = latestNews[i].title;

                    var container = document.getElementById('latestnews');
                    container.appendChild(a);

                    //dynamically create date and time container
                    var dateTime = document.createElement('div')
                    var date = document.createElement('span')
                    date.innerHTML = latestNews[i].date;

                    var time = document.createElement('span')
                    time.innerHTML = "." + latestNews[i].time;

                    dateTime.appendChild(date);
                    dateTime.appendChild(time);
                    container.appendChild(dateTime);
                }
            }
        }
        xhr.send();
    }
    mainData();
    latestNews();
};



