const asset = {
  base: {
    name: 'Carbon Credits Dataset',
    dateCreated: '2019-10-19T10:55:11Z',
    author: 'Denham',
    license: 'CC0: Public Domain',
    price: '0',
    files: [
      {
        index: 0,
        contentType: 'application/zip',
        checksum: '2bf9d229d110d1976cdf85e9f3256c7f',
        checksumType: 'MD5',
        contentLength: 12057507,
        compression: 'zip',
        encoding: 'UTF-8',
        url:
          'https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/assets/training.zip'
      },
      {
        index: 1,
        contentType: 'text/txt',
        checksum: '354d19c0733c47ef3a6cce5b633116b0',
        checksumType: 'MD5',
        contentLength: 928,
        url:
          'https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/assets/monkey_labels.txt',
        resourceId: 'test'
      },
      {
        index: 2
      }
    ],
    checksum: '',
    categories: ['image'],
    tags: ['Location', 'Carbon Credits', 'Sustainability'],
    type: 'dataset',
    description: 'A mock data set of our carbon credit data',
    copyrightHolder: 'Unknown',
    workExample: 'image path, id, label',
    links: [
      {
        name: 'example model',
        url:
          'https://drive.google.com/open?id=1uuz50RGiAW8YxRcWeQVgQglZpyAebgSM'
      },
      {
        name: 'example code',
        type: 'example code',
        url: 'https://github.com/slothkong/CNN_classification_10_monkey_species'
      },
      {
        url:
          'https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/links/discovery/n5151.jpg',
        name: 'n5151.jpg',
        type: 'discovery'
      },
      {
        url:
          'https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/links/sample/sample.zip',
        name: 'sample.zip',
        type: 'sample'
      }
    ],
    inLanguage: 'en'
  }
}

export default asset
