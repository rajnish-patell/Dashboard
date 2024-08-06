import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Item } from "../common/StyledComponents";

const Feedback = () => {
  const theme = useTheme();

  const feedbacks = [
    {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 4,
      feedback: "Great service! I'm really impressed with the quality and speed."
    },
    {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      feedback: "Excellent experience! Highly recommend this to everyone."
    },
    {
      name: "Alice Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 3,
      feedback: "Good service, but there's room for improvement."
    },
    {
      name: "Bob Brown",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 4,
      feedback: "Satisfied with the service, will use again."
    },
    {
      name: "Carol White",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      feedback: "Fantastic! Exceeded my expectations."
    },
    {
      name: "David Green",
      avatar: "https://i.pravatar.cc/150?img=6",
      rating: 2,
      feedback: "Not happy with the service. It could be better."
    },
    {
      name: "Eva Adams",
      avatar: "https://i.pravatar.cc/150?img=7",
      rating: 4,
      feedback: "Very good service, but there's minor room for improvement."
    },
    {
      name: "Frank Harris",
      avatar: "https://i.pravatar.cc/150?img=8",
      rating: 5,
      feedback: "Excellent! Will definitely recommend to others."
    }
  ];

  return (
    <Item sx={{ minHeight: "380px" }}>
      <Box className="customerFeedback">
        <Typography variant="h5" sx={{mb: 2}}>Customer's Feedback</Typography>
        <Box className="cfWrapper" sx={{maxHeight: '300px',overflow: 'auto'}}>
          {feedbacks.map((feedback, index) => (
            <Box key={index} sx={{ marginBottom: 2, }}>
              <Box display="flex" alignItems="center" flexWrap="wrap">
                <Avatar src={feedback.avatar} sx={{ marginRight: 2 }} />
                <Box>
                  <Typography variant="h6" sx={{'@media (max-width: 899px)': {fontSize: '14px'} }}>{feedback.name}</Typography>
                  
                </Box>
                <Box sx={{flex: '0 100%',mt: 1}}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      i < feedback.rating ? 
                        <StarIcon key={i} sx={{ color: theme.palette.warning.main }} /> 
                        : 
                        <StarBorderIcon key={i} color="action" />
                    ))}
                  </Box>
              </Box>
              <Typography variant="body1" sx={{ marginTop: 1,color: theme.palette.mode === 'light' ?  "#000000" : '#ffffff' }}>
                {feedback.feedback}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Item>
  );
};

export default Feedback;
