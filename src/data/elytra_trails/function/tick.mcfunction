scoreboard players enable @a toggle_elytra_trails

execute as @a if score @s toggle_elytra_trails matches 2.. run scoreboard players set @s toggle_elytra_trails 0
execute as @a if score @s toggle_elytra_trails matches ..-1 run scoreboard players set @s toggle_elytra_trails 0

execute as @a at @s if data entity @s {FallFlying:1b} run particle minecraft:dust{color:[1, 1, 1], scale: 4} ^ ^ ^-1 0.1 0.1 0.1 0.0001 50 force @a[scores={toggle_elytra_trails=0}]