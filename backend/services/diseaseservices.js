exports.detectDisease = async (req, res) => {
    const { imageUrl } = req.body;
  
    // Placeholder API call logic
    const diseaseInfo = {
      name: 'Powdery Mildew',
      treatment: 'Use fungicides containing sulfur or copper.',
    };
  
    res.status(200).json({ message: 'Disease detected', data: diseaseInfo });
  };
  