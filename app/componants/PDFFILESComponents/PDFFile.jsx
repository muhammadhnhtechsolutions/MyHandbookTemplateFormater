import React from 'react';
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import PDFimage from "../../assets/imges/FHB_Collage-4.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    // Remove unused fontFamily property
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const MyDocument = () => {
  const pageColors = ['#f6d186', '#f67280', '#c06c84'];

  const pages = [
    { text: 'First page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' }, 
    { text: 'Second page content here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
    { text: 'Third page content here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
  ];

  return (
    <Document>
      {pages.map((page, index) => (
        <Page key={index} style={{ ...styles.body, backgroundColor: pageColors[index] }}>
          <Text style={styles.header}>{page.text}</Text> <Image style={styles.image} src={page.image} />
          <Text style={styles.text}>{page.text}</Text> <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </Page>
      ))}
    </Document>
  );
};

export default function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf" className="download-button">
        {({ loading }) => (loading ? <button>Loading document...</button> : 'Download Now!')}
      </PDFDownloadLink>
    </div>
  );
}
// export default MyDocument;