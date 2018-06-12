package hawservice.controller;

import hawservice.exception.UserNotFoundException;
import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import hawservice.model.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/v1/user")
public class UserController
{

    @PostMapping()
    public ResponseEntity<UserDTO> createUser(@RequestBody @Valid UserDTO userDTO)
    {

        return new ResponseEntity<>(HttpStatus.CREATED);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) throws UserNotFoundException
    {
        return new ResponseEntity(HttpStatus.OK);
    }


    @GetMapping("/login")
    public ResponseEntity<UserDTO> confirmPassword(@RequestParam String email, @RequestParam String password)
    {
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody @Valid UserDTO userDTO)
    {
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping()
    public ResponseEntity<UserDTO> getUser(@RequestParam Long id) throws UserNotFoundException
    {
        UserDTO user_1 =  UserDTO.builder().first_name("Alex").build();
        return new ResponseEntity<>(user_1, HttpStatus.OK);
    }


    @GetMapping("/users")
    public ResponseEntity<List<UserDTO>> getAllUsers()
    {
        ArrayList<UserDTO> list = new ArrayList<>();
        UserDTO user_1 =  UserDTO.builder().first_name("Alex").build();
        UserDTO user_2 =  UserDTO.builder().first_name("Nizami").build();
        UserDTO user_3 =  UserDTO.builder().first_name("Lorant").build();
        UserDTO user_4 =  UserDTO.builder().first_name("Saaket").build();
        list.add(user_1);
        list.add(user_2);
        list.add(user_3);
        list.add(user_4);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

}
