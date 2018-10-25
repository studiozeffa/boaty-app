import React, { Component } from 'react';
import { Image } from 'react-native';

import ImageViewer from '../components/ImageViewer';
import { getRandomImageUrl } from '../services/imageService';

interface IState {
  loading: boolean;
  imageUrl: string | null;
}

class ImageScreen extends Component<{}, IState> {
  public state = {
    loading: false,
    imageUrl: null,
  };

  constructor(props: {}) {
    super(props);
    this.fetchNewImage = this.fetchNewImage.bind(this);
  }

  public componentDidMount() {
    this.fetchNewImage();
  }

  public render() {
    const { imageUrl, loading } = this.state;
    if (!imageUrl) {
      // First load
      return null;
    }
    return (
      <ImageViewer
        loading={loading}
        url={imageUrl}
        onFetchRequest={this.fetchNewImage}
      />
    );
  }

  private async fetchNewImage() {
    this.setState({
      loading: true,
    });

    const url = getRandomImageUrl(this.state.imageUrl);
    await Image.prefetch(url);

    this.setState({
      loading: false,
      imageUrl: url,
    });
  }
}

export default ImageScreen;
