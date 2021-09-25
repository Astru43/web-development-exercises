import './App.css';
import MainPage from './components/MainPage/MainPage';
import Notifications from './components/Notifications/Notifications';
import TitleBar from './components/TitleBar/TitleBar';

function App() {
    const notifications = [
        { topic: "CLUTURE", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { topic: "SPORTS", desc: "Vivamus vel nunc ac risus commodo pellentesque non sit amet turpis." },
        { topic: "TECHNOLOGY", desc: "Suspendisse facilisis sem vel felis vehicula, vitae pharetra dolor sollicitudin." },
        { topic: "AD", desc: "Nulla tristique nibh mattis justo fermentum, sit amet interdum mauris rutrum." },
        { topic: "STOCK", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pulvinar justo. Nulla in viverra mauris. Maecenas pulvinar diam mauris, quis egestas nunc dictum at. Vivamus vel risus eu turpis pulvinar tincidunt quis interdum odio. Fusce faucibus varius convallis. Mauris a cursus est. Morbi et ultricies libero, id sollicitudin metus. Phasellus venenatis, nunc in posuere convallis, justo eros rutrum enim, in scelerisque urna orci in leo." }
    ]
    const mainTopic = {
        topic: "Coronavirus",
        headlines: [
            {
                title: "Lorem",
                desc: "ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec orci sapien. Curabitur non purus convallis, elementum tellus sit amet, ornare arcu. Nam eu maximus nulla. Sed condimentum sapien at volutpat convallis. Cras ut ex a orci malesuada ultrices. Nulla mattis augue in faucibus sagittis.",
                time: "7:05",
                topic: "Politics",
                img_src: 'res/test_img.png',
                color: "#01CC00",
            },
            {
                title: "Proin",
                desc: "tincidunt in enim sit amet bibendum. In at purus lorem. Nulla eu ornare enim. Vivamus maximus ac metus vel mollis. Donec egestas eget odio feugiat ornare. Vivamus tristique turpis a aliquam tempor. Duis eros magna, sodales ut nulla eu, mattis vehicula libero. Fusce mattis diam quis quam congue rhoncus.",
                time: "12:24",
                topic: "Sience",
                img_src: 'res/test_img.png',
                color: "red",
            },
            {
                title: "Nullam",
                desc: "ac tincidunt ligula. Ut in placerat arcu. Aenean sollicitudin odio ut felis dictum, ac molestie lorem ultrices. Proin massa mauris, sagittis nec odio sed, porttitor ullamcorper enim. Cras porta dui sed tempus viverra. Cras dui risus, posuere a magna ac, pretium varius mauris. Nulla vitae tellus at turpis vestibulum commodo quis vel metus.",
                time: "14:36",
                topic: "Healthcare",
                img_src: 'res/test_img_2.jpg',
                color: "darkred",
            }
        ]
    }
    const topics = [
        {
            title: "Duis",
            desc: "suscipit quam nec euismod dapibus. Vivamus malesuada quis orci id iaculis. Sed faucibus urna diam, imperdiet fringilla risus ultricies commodo. Aenean luctus, nibh et dapibus condimentum, nisi augue sodales tellus, quis semper orci dolor in arcu. Morbi sit amet velit eget odio rhoncus dapibus. Nam varius laoreet mattis.",
            time: "18:56",
            topic: "Coronavirus",
            img_src: "res/test_img_2.jpg",
            color: "blue",
            side_headlines: []
        },
        {
            title: "Nunc",
            desc: "in libero ut mi egestas facilisis a sodales leo. Fusce ut enim eu ligula efficitur egestas. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent facilisis, magna ac aliquet ullamcorper, augue elit viverra ipsum, at porttitor enim risus sit amet libero. Integer aliquet diam metus, vel ultricies erat commodo sit amet. Sed a scelerisque arcu.",
            time: "18:56",
            topic: "Sports",
            img_src: "res/test_img.png",
            color: "purple",
            side_headlines: [
                {
                    title: "Nullam",
                    desc: "ac tincidunt ligula. Ut in placerat arcu. Aenean sollicitudin odio ut felis dictum, ac molestie lorem ultrices. Proin massa mauris, sagittis nec odio sed, porttitor ullamcorper enim. Cras porta dui sed tempus viverra. Cras dui risus, posuere a magna ac, pretium varius mauris. Nulla vitae tellus at turpis vestibulum commodo quis vel metus.",
                    time: "14:36",
                    topic: "Sport",
                    img_src: 'res/test_img.png',
                    color: "purple",
                }
            ]
        },
        {
            title: "Etiam",
            desc: "nec ligula luctus, scelerisque diam in, lacinia sapien. Vestibulum pharetra nunc est, quis mollis arcu pulvinar eu. Proin arcu enim, varius et tortor sed, vehicula vestibulum nisi. Nunc a augue eu sem pretium scelerisque.",
            time: "18:56",
            topic: "Culture",
            img_src: "res/test_img.png",
            color: "lightblue",
            side_headlines: []
        },
    ]
    const mostRead = [
        {
            title: "Suspendisse",
            desc: "blandit, dolor a sollicitudin ultrices, nisi est mollis libero, id ultricies dui justo vel nunc. Maecenas ultrices eleifend turpis ut ultrices."
        },
        {
            title: "Phasellus",
            desc: "a euismod lacus, a mattis dolor. Donec efficitur diam ut tempus congue. Nullam commodo, odio in placerat auctor, justo velit blandit velit, a molestie velit tortor eget ipsum. Proin venenatis tempus urna, ac gravida felis cursus eget. Duis tellus ex, aliquet nec eleifend id, gravida id ligula."
        },
        {
            title: "Quisque",
            desc: "blandit volutpat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et mattis augue. "
        },
        {
            title: "Nam",
            desc: "varius accumsan arcu, id viverra libero facilisis a. Aliquam non aliquet nisl. Nullam venenatis turpis sit amet felis placerat, nec tristique tellus accumsan."
        },
        {
            title: "Phasellus",
            desc: "vestibulum consectetur ipsum. Phasellus faucibus commodo mi, vel imperdiet turpis sodales id. Aliquam vestibulum nisl non vestibulum varius."
        },
        {
            title: "Sed",
            desc: "mollis aliquet ultricies. Maecenas tincidunt ipsum vel ornare scelerisque. Morbi ut fermentum nisl. Aliquam ornare tellus eu malesuada consectetur."
        },
        {
            title: "Morbi",
            desc: "id felis rhoncus, gravida diam ut, ornare enim. Nunc pellentesque semper ex vitae interdum. Proin dictum hendrerit risus, consectetur dignissim ipsum ultricies id. Phasellus accumsan diam ac velit tempus efficitur. Cras tristique odio vel mauris faucibus molestie. Sed id lobortis risus. Donec magna nisl, hendrerit congue euismod ut, suscipit a quam."
        }

    ]
    const latest = [
        {
            title: "Phasellus",
            desc: "a euismod lacus, a mattis dolor. Donec efficitur diam ut tempus congue. Nullam commodo, odio in placerat auctor, justo velit blandit velit, a molestie velit tortor eget ipsum. Proin venenatis tempus urna, ac gravida felis cursus eget. Duis tellus ex, aliquet nec eleifend id, gravida id ligula.",
            time: "18.00"
        },
        {
            title: "Quisque",
            desc: "blandit volutpat bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et mattis augue. ",
            time: "17.55"
        },
        {
            title: "Nam",
            desc: "varius accumsan arcu, id viverra libero facilisis a. Aliquam non aliquet nisl. Nullam venenatis turpis sit amet felis placerat, nec tristique tellus accumsan.",
            time: "17.52"
        },
        {
            title: "Phasellus",
            desc: "vestibulum consectetur ipsum. Phasellus faucibus commodo mi, vel imperdiet turpis sodales id. Aliquam vestibulum nisl non vestibulum varius.",
            time: "17.40"
        },
        {
            title: "Sed",
            desc: "mollis aliquet ultricies. Maecenas tincidunt ipsum vel ornare scelerisque. Morbi ut fermentum nisl. Aliquam ornare tellus eu malesuada consectetur.",
            time: "17.28"
        }
    ]

    return (
        <div>
            <TitleBar></TitleBar>
            <Notifications notifications={notifications}></Notifications>
            <MainPage mainTopic={mainTopic} sideTopics={topics} mostRead={mostRead} latest={latest}></MainPage>
        </div>
    );
}

export default App;
