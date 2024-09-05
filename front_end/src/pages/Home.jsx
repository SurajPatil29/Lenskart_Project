import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomes } from "../redux/actions/homeAction";
import { ErrorHandler } from "../loading&error/Errorhandling";
import { Loadinghandling } from "../loading&error/Loadinghandling";
import { ImageDisplay } from "./homeHelper/ImageDisplay"; // Import the ImageDisplay component
import { Box, Text, Image, Stack, Flex, HStack, Divider } from "@chakra-ui/react"; // Import Chakra UI components
import { AutoSlider } from "../utils/AutoSlider";
import WearTrand from "./homeHelper/wearTrand";
import ImageGrid from "./homeHelper/ImageGrid";
import ImageGrid2 from "./homeHelper/ImageGrid2";
import { ManualSlider2 } from "../utils/ManualSlider2";
import HappyCustomers from "./homeHelper/HappyCustomers";

function Home() {
  const dispatch = useDispatch();
  const { homes, loading, error } = useSelector((state) => state.home); // Accessing home state from redux

  useEffect(() => {
    dispatch(fetchHomes()); // Dispatch action to fetch homes data
  }, [dispatch]);

  const handleErrorClose = () => {
    dispatch({ type: "CLEAR_ERROR" }); // Clear error using dispatch
  };

  console.log(homes, loading, error);

  const videoData = {
    "_id": {
      "$oid": "66cef150845af56049e76888"
    },
    "row": "MEET OUR HAPPY CUSTOMERS",
    "videoLink": [
      {
        "video": "<iframe width='560' height='315' src='https://www.youtube.com/embed/HYPqf_eVvvM?si=t2LCNgPl-qbwyQjl' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
      },
      {
        "video": "<iframe width='560' height='315' src='https://www.youtube.com/embed/SQm3RxXRunw?si=FMtRJTuU4OiOqzSH' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
      },
      {
        "video": "<iframe width='560' height='315' src='https://www.youtube.com/embed/IZpUQ-S_LcM?si=BvG8stmeFHDlacYL' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
      }
    ]
  };
  
  // Using the HappyCustomers component
  <HappyCustomers data={videoData} />
  

  return (
    <>
      <Box p={2}>

        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home,i) =>
                home.row === "second row" ? (
                  <Box key={i} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>

      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home,i) =>
                home.row === "third row" ? (
                  <Box key={i} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>

      <AutoSlider width="1440px">
        <Stack direction="row" spacing={0} p={4}>
          {homes && homes.map((obj, i) =>
            obj.row === "scroll bar" ? (
              <Box key={i} display="flex" flex="0 0 auto" maxW="100%">
                {obj.images.map((img, j) => (
                  <Image
                    key={j}
                    src={img}
                    alt={`Slide ${j}`}
                    maxW="100%"

                    objectFit="cover" // Adjusts how the image fits within its container
                  />
                ))}
              </Box>
            ) : null
          )}
        </Stack>
      </AutoSlider>


      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home,i) =>
                home.row === "fourth row" ? (
                  <Box key={i} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>

      <Box >
        {homes && homes.length > 0 ? (
          homes.map((home) =>
            home.row === "fifth row" ? (
              <WearTrand data={home.glasses_range} key={home._id} />
            ) : null
          )
        ) : (
          <Text>No homes available</Text>
        )}
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize={['md', 'lg', 'xl', '2xl']}>
            FREE PROGRESSIVE LENSES
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "free proggesive lenses" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            BOOK EYE TEST AT HOME
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "book eye test at home" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            FREE ONLINE EYE TEST
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "free online eye test" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            PREMIUM EYEWARE
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "premium eyewear" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            AS SEEN ON MOUNI ROY
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "as seen on mouni roy" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            AS SEEN ON SHARK TANK
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "as seen on shark tank" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            AS SEEN ON KARAN JOHAR
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "as seen on karan johar" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            TRANDING SUNGLASSES
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "tranding sunglasses" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>



      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            AQUACOLOR - GLAM UP WITH COLOR LENSES
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "aquacolor - glam up with color lenses" ? (
                    <Box key={i} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            FIND THE PERFECT FIT
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box px={20}>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "Find the perfect fit" ? (
                    <Box key={i} mb={4}>
                      <ImageGrid data={home} />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            CONTACT LENSES & MORE
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box px={20}>
              {homes && homes.length > 0 ? (
                homes.map((home,i) =>
                  home.row === "contact lenses and more" ? (
                    <Flex gap={10} px={20} key={i} mb={4}>
                      <Box>
                        <Image src={home.image1} alt="image" w="100%" h="100%" objectFit="cover" />

                      </Box>
                      <Box>
                        <Image src={home.image2} alt="image" w="100%" h="100%" objectFit="cover" />

                      </Box>

                    </Flex>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            BUY IT YOUR WAY
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box px={20}>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "buy it your way" ? (
                    <ImageGrid2 data={home} />
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box>
        <Flex align="center" mb={4}>
          <Box flex="1" borderBottom="0.5px solid #000" />
          <Text mx={4} fontWeight="medium" fontSize="3xl">
            OUR BRAND
          </Text>
          <Box flex="1" borderBottom="0.5px solid #000" />
        </Flex>
        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "our brands" ? (
                    <Box key={home.id} mb={4}>
                      <ImageDisplay imageUrl={home.image} altText="Image" />
                    </Box>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              EYEGLASSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "eyeglasses1" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>



      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              SUNGLASSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "sunglasses1" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>



      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home) =>
                home.row === "adds1" ? (
                  <Box key={home.id} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>


      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              EYEGLASSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "eyeglasses2" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>



      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              SUNGLASSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "sunglasses2" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>

      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home) =>
                home.row === "adds2" ? (
                  <Box key={home.id} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>




      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              EYEGLASSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "eyeglasses3" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>

      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home) =>
                home.row === "adds3" ? (
                  <Box key={home.id} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>



      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              EYEGLASSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "eyeglasses4" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>

      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home) =>
                home.row === "adds4" ? (
                  <Box key={home.id} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>




      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              WITH POWER COMPUTER BLU LENSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "with power computer blu lenses" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              WITH ZERO POWER COMPUTER BLU LENSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "WITH ZERO POWER COMPUTER BLU LENSES" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>


      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home) =>
                home.row === "adds5" ? (
                  <Box key={home.id} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>


      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              CONTACT LENSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "CONTACT LENSES" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>



      <Box px="13%">
        <Box w="100%" padding={5}>
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="medium">
              COLOR CONTACT LENSES
            </Text>
            <Text fontSize="xl" fontWeight="light" color="#329CAE">
              View Range
            </Text>
          </Flex>
          <Divider mt={2} borderColor="gray.300" />
        </Box>

        <Box p={1}>
          <ErrorHandler error={error} onClose={handleErrorClose} />
          {loading ? (
            <Loadinghandling />
          ) : (
            <Box>
              {homes && homes.length > 0 ? (
                homes.map((home) =>
                  home.row === "COLOR CONTACT LENSES" ? (
                    <ManualSlider2 key={home._id}>
                      <Box display="flex" justifyContent="center" mx="auto">
                        <HStack spacing={4} px={4}>
                          {home.images && Array.isArray(home.images) && home.images.length > 0 ? (
                            home.images.map((item, index) => (
                              <Box
                                key={index}
                                width="300px" // Ensure width matches the itemWidth in ManualSlider2
                                textAlign="center"

                              >
                                <Image src={item.image} alt={item.title} width="100%" />


                              </Box>
                            ))
                          ) : (
                            <Text>No images available</Text>
                          )}
                        </HStack>
                      </Box>
                    </ManualSlider2>
                  ) : null
                )
              ) : (
                <Text>No homes available</Text>
              )}
            </Box>
          )}
        </Box>
      </Box>







      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            {homes && homes.length > 0 ? (
              homes.map((home) =>
                home.row === "adds6" ? (
                  <Box key={home.id} mb={4}>
                    <ImageDisplay imageUrl={home.image} altText="Image" />
                  </Box>
                ) : null
              )
            ) : (
              <Text>No homes available</Text>
            )}
          </Box>
        )}
      </Box>


      <Box p={1}>
        <ErrorHandler error={error} onClose={handleErrorClose} />
        {loading ? (
          <Loadinghandling />
        ) : (
          <Box>
            <HappyCustomers data={videoData} />
          </Box>
        )}
      </Box>









    </>
  );
}

export { Home };
