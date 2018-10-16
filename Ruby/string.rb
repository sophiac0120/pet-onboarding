# x = "String should be wrapped with quotation marks"
# p x

# puts "Name an name"
# name = gets.chomp
#
# puts "Name a noun"
# noun = gets.chomp
#
# p "#{name} has a #{noun}" #string interpolation needs "

# p "Astros".upcase #Basic search engine
# p "Sophia".reverse.downcase
#
# p "sophia".downcase! #changing the actual value itself
#
#
# m = "Astros"
# n = m.upcase
# p m
# p n
#
# l = "Hi"
# x = l.downcase!
# p l
# p x

str = "The quick brown fox jumped over the quick dog"
# p str.gsub! "quick", "slow" #global sub is gsub
# p str
p str.split.size
p str.split(//).size
p str.split(//) #letter
