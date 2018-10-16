full_name = Proc.new { |first, last| first + " " + last}
#Store method as a variable
p full_name['Sophia', 'Choi']

full_name2 = Proc.new do |first|
  first * 5
end

p full_name2["Sophia"]


#Lambdas
first_name = lambda { |first, last| first + " " + last }
p first_name['Sophia', 'Choi']


#The most commonly used Converted

name = -> (first, last) {first + " " + last}
p name["Sophia", "Choi"]
p name.call("Sophia", "Choi")

#Procs vs Lambdas

# full_name3 = lambda { |first, last| first + " " + last }
# p full_name3.call('Soph', 'Ji', 'Who')

full_name4 = Proc.new { |first, last| first + " " + last }
p full_name4["SOPHI", 'JI', "WHO"]
