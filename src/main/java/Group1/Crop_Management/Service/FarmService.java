package Group1.Crop_Management.Service;

import Group1.Crop_Management.Model.Farm;

import java.util.List;

public interface FarmService {

    Farm addFarm(Farm farm);

    Farm getFarm(Long id);

    List<Farm> getAllFarms();

    List<Farm> getFarmsByUserId(Long id);

    Farm updateFarm(Long id, Farm farm);

    void deleteFarm(Long id);
}
