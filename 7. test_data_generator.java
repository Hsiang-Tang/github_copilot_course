7. 範例/測試數據生成

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    private final Map<String, Photo> photos = new HashMap<>() 
        {
            {
                put("1", new Photo("1", "photo1", "https://example.com/Taiwan.jpg"));
                put("2", new Photo("2", "photo2", "https://example.com/China.jpg"));
                put("3", new Photo("3", "photo3", "https://example.com/Japan.jpg"));
            }
        };
        }


    @GetMapping("/photos")
    public List<Photo> getPhotos() {
        return new ArrayList<>(photos.values());
    }
