package Group1.Crop_Management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Group1.Crop_Management.Model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail (String email);

}
