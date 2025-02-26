/**
 * Represents the various states or properties that a block can have in Minecraft.
 * These states affect the appearance, behavior, and functionality of the blocks in-game.
 * 
 * Each value represents a different aspect of a block that can be tracked or manipulated.
 * For example, a block might have a "facing_direction" state that determines which direction
 * it is facing, or a "waterlogged" state that indicates if the block is submerged in water.
 * 
 * These block states can be used when manipulating blocks via scripting or defining custom behaviors.
 */
export type VanillaBlockState =
  | "active"
  | "age"
  | "age_bit"
  | "allow_underwater_bit"
  | "attached_bit"
  | "attachment"
  | "bamboo_leaf_size"
  | "bamboo_stalk_thickness"
  | "big_dripleaf_tilt"
  | "bite_counter"
  | "block_face"
  | "block_light_level"
  | "brewing_stand_slot_a_bit"
  | "brewing_stand_slot_b_bit"
  | "brewing_stand_slot_c_bit"
  | "button_pressed_bit"
  | "candles"
  | "cardinal_direction"
  | "cauldron_liquid"
  | "chemistry_table_type"
  | "chisel_type"
  | "cluster_count"
  | "color"
  | "color_bit"
  | "composter_fill_level"
  | "conditional_bit"
  | "coral_color"
  | "coral_direction"
  | "coral_fan_direction"
  | "coral_hang_type_bit"
  | "covered_bit"
  | "cracked_state"
  | "damage"
  | "deprecated"
  | "dead_bit"
  | "direction"
  | "dirt_type"
  | "disarmed_bit"
  | "door_hinge_bit"
  | "double_plant_type"
  | "drag_down"
  | "dripstone_thickness"
  | "end_portal_eye_bit"
  | "explode_bit"
  | "extinguished"
  | "facing_direction"
  | "fill_level"
  | "flower_type"
  | "growth"
  | "hanging_bit"
  | "head_piece_bit"
  | "height"
  | "honey_level"
  | "huge_mushroom_bits"
  | "infiniburn_bit"
  | "in_wall_bit"
  | "item_frame_map_bit"
  | "item_frame_photo_bit"
  | "kelp_age"
  | "lever_direction"
  | "liquid_depth"
  | "lit"
  | "moisturized_amount"
  | "monster_egg_stone_type"
  | "multi_face_direction_bits"
  | "new_leaf_type"
  | "new_log_type"
  | "occupied_bit"
  | "old_leaf_type"
  | "old_log_type"
  | "ominous"
  | "open_bit"
  | "output_lit_bit"
  | "output_subtract_bit"
  | "persistent_bit"
  | "pillar_axis"
  | "portal_axis"
  | "powered_bit"
  | "prismarine_block_type"
  | "rail_data_bit"
  | "rail_direction"
  | "redstone_signal"
  | "repeater_delay"
  | "respawn_anchor_charge"
  | "rotation"
  | "sandstone_type"
  | "sand_type"
  | "sapling_type"
  | "sculk_sensor_phase"
  | "sea_grass_type"
  | "sponge_type"
  | "stability"
  | "stability_check"
  | "stone_brick_type"
  | "stone_slab_type"
  | "stone_slab_type_2"
  | "stone_slab_type_3"
  | "stone_slab_type_4"
  | "stone_type"
  | "stripped_bit"
  | "structure_block_type"
  | "structure_void_type"
  | "suspended_bit"
  | "tall_grass_type"
  | "toggle_bit"
  | "top_slot_bit"
  | "torch_facing_direction"
  | "triggered_bit"
  | "turtle_egg_count"
  | "twisting_vines_age"
  | "update_bit"
  | "upper_block_bit"
  | "upside_down_bit"
  | "vertical_half"
  | "vine_direction_bits"
  | "wall_block_type"
  | "wall_connection_type_east"
  | "wall_connection_type_north"
  | "wall_connection_type_south"
  | "wall_connection_type_west"
  | "wall_post_bit"
  | "weeping_vines_age"
  | "weirdo_direction"
  | "wood_type";
