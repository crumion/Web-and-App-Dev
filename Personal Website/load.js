            function load() {
                var mydata = JSON.parse(data);

                var div = document.getElementById('data');

                for(var i = 0;i < mydata.length; i++)
                {
                    div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].title + ", " + mydata[i].author + "</p>" + "<br>";
                }
            }